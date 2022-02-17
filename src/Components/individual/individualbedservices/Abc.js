import React from "react";

function Abc() {
  return (
    <>
      <div>
        <p
          className="mt-3 mr-3"
          style={{ float: "right", fontFamily: "popreg", fontSize: "12px" }}
        >
          LAST UPDATED 10 minutes AGO
        </p>
      </div>
      <div className=" pl-4 pr-4">
        <div className="abc_personal">
          <div className="title_shelter mt-5">ABC SHELTER</div>
          <div className="adress_title">12 Miles Away</div>
          <div className="adress_title mt-2">
            17 Billingsgate Avenue MALIBU,
          </div>
          <div className="adress_title">### ###-####</div>
          <div style={{ justifyContent: "flex-start" }} className="avail">
            <div className="cricle_div23 ml-0 mr-0 green">2</div>
            <img
              className="ml-2"
              style={{ height: "30px" }}
              src="/images/sleepbed.svg"
              alt=""
            />
            <p className="avail_title">availble BEDS</p>
          </div>
          <div style={{ justifyContent: "flex-start" }} className="avail">
            <div className="cricle_div23 ml-0 mr-0 golden">7</div>
            <img
              className="ml-2"
              style={{ height: "30px" }}
              src="/images/sleepbed.svg"
              alt=""
            />
            <p className="avail_title"> Available for reservation</p>
          </div>
          <img
            style={{ width: "250px" }}
            src="/images/shelterroom.svg"
            alt=""
          />
          <div className="mt-3">
            <img className="mr-3" src="/images/264.svg" alt="" />
            <img className="mr-2" src="/images/265.svg" alt="" />
            <img className="mr-3" src="/images/264.svg" alt="" />
            <img className="mr-2" src="/images/265.svg" alt="" />
          </div>
          <div
            className="mt-5"
            style={{
              display: "flex",
              justifyContent: "space",
              alignItems: "center",
            }}
          >
            <div>
              <div className="meal_seciton">
                <img src="/images/meal.svg" alt="" />
                <div
                  style={{ fontFamily: "popreg", fontSzie: "11px" }}
                  className="ml-3 font10"
                >
                  MEALS OFFERED
                </div>
              </div>
              <div className="mt-3 font10">BREAKFAST LUNCH DINNER</div>
            </div>
            <div>
              <div className="meal_seciton">
                <img src="/images/type.svg" alt="" />
                <div
                  style={{ fontFamily: "popreg", fontSzie: "11px" }}
                  className="ml-3 font10"
                >
                  MEALS OFFERED
                </div>
              </div>
              <div className="mt-3 font10">Family Friendly</div>
            </div>
          </div>
        </div>
        <div className="descrp mt-4">
          <div className="des_tilte">DESCRIPTION</div>
          <div className="dec_p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, amet
            risus sodales fames ut felis. Nunc, urna massa, cursus in ultrices
            dictumst. Nibh orci vitae ut sagittis tellus feugiat vulputate
            mauris tempus. Volutpat maecenas tempor etiam egestas. Habitant.
          </div>
        </div>
      </div>
    </>
  );
}

export default Abc;
