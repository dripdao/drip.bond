import React, { useState, useEffect } from "react";
import { ethers } from "ethers";

import moment from "moment";
import deployments from "drip-contracts/deployments/deployments";
import { throttle, memoize } from "lodash";

const getProvider = memoize(() =>
  window.ethereum
    ? new ethers.providers.Web3Provider(window.ethereum)
    : new ethers.providers.InfuraProvider(
        "mainnet",
        "d461864277b3499f802c3b0f4e5a9bd0"
      )
);

const getSigner = memoize(() => {
  const provider = getProvider();
  try {
    return provider.getSigner();
  } catch (e) {
    return provider;
  }
});

const getContract = (name) => {
  const implementation = deployments[1][0].contracts[name];
  const contract = deployments[1][0].contracts[name + "Proxy"];
  return new ethers.Contract(contract.address, implementation.abi, getSigner());
};

const drip = getContract("DRIP");
const dripBond = getContract("DRIPBOND");

const mintDripBond = async (amount) => {
  if (Number(amount) < 0.2) return;
  await dripBond.mint({ value: ethers.utils.parseEther(amount) });
};

const burnDripBond = async (index) => {
  await dripBond.burn(index);
};

const getStaticProvider = memoize(() =>
  new ethers.providers.JsonRpcProvider(
    new ethers.providers.InfuraProvider(
      "mainnet",
      "d461864277b3499f802c3b0f4e5a9bd0"
    ).connection.url
  ).getSigner("0xab5801a7d398351b8be11c439e05c5b3259aec9b")
);

const getBlockData = async () => {
  const provider = getProvider();
  const block = await provider.getBlock("latest");
  let address = ethers.constants.AddressZero;
  let bonds = [];
  let minimum = 0.2;
  let dripPerMinimum = 50;
  let dripAtMaturity = 52.5;
  let drpy = Math.pow(1.05, 52 / 2);
  let rate = ethers.utils.parseEther("0.05");
  let maturesAfter = 60 * 60 * 24 * 14;

  try {
    dripPerMinimum = ethers.utils.formatEther(
      await dripBond
        .connect(getStaticProvider())
        .callStatic.mint({ value: ethers.utils.parseEther(String(minimum)) })
    );
    rate = await dripBond.rate();
    maturesAfter = Number(await dripBond.maturesAfter());
    dripAtMaturity =
      dripPerMinimum *
      Number(ethers.utils.formatEther(rate.add(ethers.utils.parseEther("1"))));
    drpy = Math.pow(
      Number(ethers.utils.formatEther(ethers.utils.parseEther("1").add(rate))),
      Math.floor((60 * 60 * 24 * 365) / maturesAfter)
    ).toFixed(4);
    address = await getSigner().getAddress();
    bonds = (
      await Promise.all(
        (
          await provider.getLogs(
            Object.assign(
              {
                fromBlock: ethers.utils.hexlify(14437966),
                toBlock: "latest",
              },
              dripBond.filters.DripBondMinted(address)
            )
          )
        ).map(async (v) => {
          try {
            const log = dripBond.interface.parseLog(v);
            return {
              log,
              bond: await dripBond.bonds(log.args[1]),
            };
          } catch (e) {
            console.error(e);
          }
        })
      )
    ).filter(Boolean);
  } catch (e) {
    console.error(e);
  }
  return {
    block,
    minimum,
    dripPerMinimum,
    dripAtMaturity,
    maturesAfter,
    rate: ethers.utils.formatEther(rate),
    drpy,
    address,
    bonds,
  };
};

const Bond = ({
  ClassSec = "",
  ClassDiv = "",
  specialHead = "",
  title = "",
  link1 = "",
  link2 = "",
  img = "",
  HomeDemo1Or3Or4Or5Or6 = true,
  HomeDemo1Or4Or5Or6 = true,
}) => {
  const [blockData, setBlockData] = useState({
    address: ethers.constants.AddressZero,
    bonds: [],
    block: { number: 0 },
  });
  useEffect(() => {
    try {
      window.ethereum.enable();
    } catch (e) {
      console.error(e);
    }
  }, []);
  useEffect(() => {
    const listener = throttle(async () => {
      try {
        setBlockData(await getBlockData());
      } catch (e) {
        console.error(e);
      }
    });
    const provider = getProvider();
    provider.on("block", listener);
    listener();
    return () => provider.off("block", listener);
  }, []);

  // AbsoImgInfo="",
  // AddWrapper=false,
  // HomeDemo1=false,
  // HomeDemo2=false,
  // HomeDemo3=false,
  // HomeDemo4=false,
  // HomeDemo5=false,
  // HomeDemo6=false

  const [mintCost, setMintCost] = useState("0.2");
  return (
    <section className={ClassSec} id="home">
      <div className="hero-section-content">
        <div className="container ">
          <div className="row align-items-center">
            <div className={ClassDiv}>
              <div className="welcome-content">
                <div className="promo-section">
                  <h3 className="special-head dark">{}</h3>
                </div>
                <div style={{ marginTop: "300px" }}></div>
                <h1>Get a DRIPBOND</h1>
                <h4>Block #{blockData.block.number}</h4>
                <br />
                <h4>DRIPBOND MINIMUM BOND: 0.2 ETH</h4>
                <h4>CONVERSION TO: {String(blockData.dripPerMinimum)} DRIP</h4>
                <h4>
                  BOND MATURITY TIME:{" "}
                  {moment(
                    new Date(
                      (blockData.block.timestamp + 60 * 60 * 24 * 14) * 1000
                    )
                  ).format("MM:DD:YY HH:ss")}
                </h4>
                <h4>
                  BOND MATURITY VALUE: {String(blockData.dripAtMaturity)} DRIP
                </h4>
                <label
                  style={{ color: "white", marginRight: "10px" }}
                  forHtml="amount"
                >
                  ETH to lock in DRIPBOND
                </label>
                <input
                  type="text"
                  name="amount"
                  value={mintCost}
                  onChange={(evt) => {
                    evt.preventDefault();
                    setMintCost(evt.target.value);
                  }}
                />
                <br />
                <button
                  type="submit"
                  className="btn more-btn"
                  onClick={(evt) => {
                    evt.preventDefault();
                    mintDripBond(mintCost).catch(console.error);
                  }}
                >
                  Create DRIPBOND
                </button>
                <br />
                <p></p>
                <br />
                {blockData.address !== ethers.constants.AddressZero &&
                  blockData.bonds.length !== 0 && (
                    <div>
                      <h4>Bonds for {blockData.address}</h4>
                      {blockData.bonds.map(({ log: v, bond }) => (
                        <div>
                          <h5>DRIPBOND #{String(v.args[1])}</h5>
                          <h5>
                            {ethers.utils.formatEther(v.args.initValue)} DRIP
                            locked
                          </h5>
                          <h5>
                            INTEREST: {ethers.utils.formatUnits(bond.rate, 16)}%
                          </h5>
                          <h5>
                            {Number(v.args.maturesAt * 1000 + 30000) <
                            Date.now() ? (
                              <button
                                className="btn more-btn"
                                onClick={(evt) => {
                                  evt.preventDefault();
                                  burnDripBond(v.args[1]).catch(console.error);
                                }}
                                type="submit"
                              >
                                CASH OUT DRIPBOND
                              </button>
                            ) : (
                              <span>
                                MATURES AT{" "}
                                {moment(
                                  new Date(Number(v.args.maturesAt) * 1000)
                                ).format("MM/DD/YY HH:ss")}
                              </span>
                            )}
                          </h5>
                        </div>
                      ))}
                    </div>
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "200px" }}></div>
    </section>
  );
};

export default Bond;
