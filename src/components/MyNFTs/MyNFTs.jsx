import React, { useState, useEffect } from "react";
import NFTImage from "../NFTImage/NFTImage";
import NFTDetails from "../NFTDetails/NFTDetails";
import Loading from "../Loading/Loading";

const MyNFTs = ({
  accountAddress,
  nfts,
  totalTokensOwnedByAccount,
}) => {
  const [loading, setLoading] = useState(false);
  const [myNfts, setMyNfts] = useState([]);

  useEffect(() => {
    if (nfts.length !== 0) {
      if (nfts[0].metaData !== undefined) {
        setLoading(loading);
      } else {
        setLoading(false);
      }
    }
    const my_nfts = nfts.filter(
      (nft) => nft.currentOwner === accountAddress
    );
    setMyNfts(my_nfts);
  }, [nfts]);

  return (
    <div>
      <div className="card mt-1">
        <div className="card-body align-items-center d-flex justify-content-center">
          <h5>
            Total No. of NFT's You Own : {totalTokensOwnedByAccount}
          </h5>
        </div>
      </div>
      <div className="d-flex flex-wrap mb-2">
        {myNfts.map((nft) => {
          return (
            <div
              key={nft.tokenId.toNumber()}
              className="w-50 p-4 mt-1 border"
            >
              <div className="row">
                <div className="col-md-6">
                  {!loading ? (
                    <CNFTImage
                      colors={
                        nft.metaData !== undefined
                          ? nft.metaData.metaData.colors
                          : ""
                      }
                    />
                  ) : (
                    <Loading />
                  )}
                </div>
                <div className="col-md-6 text-center">
                  <MyNFTDetails
                    nft={nft}
                    accountAddress={accountAddress}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyNFTs;
