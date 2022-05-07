import React, { useState, useEffect } from "react";
import { updateShelterDetails } from "../../../services/auth";

export default function Controls({
  user,
  getShelterNewData,
  instantReservation,
}) {
  const [totalBeds, setTotalBeds] = useState(user.totalNumberOfBeds);
  const [available_beds, setAvailableBeds] = useState(user.availableBeds);
  const [available_for_reservation_beds, setAvailableForReservationBeds] =
    useState(user.availableReservationBeds);

  const [incVal, setIncVal] = useState(user.totalAllowedForReservation);
  const [hour, setHour] = useState(user.maxTimeToHoldABed);
  const user_id = localStorage.getItem("user");
  const token = `Bearer ${localStorage.getItem("token")}`;

  const [save, setSave] = useState(false);

  useEffect(() => {
    setSave(true);
  }, [totalBeds, available_beds, incVal, hour]);

  useEffect(() => {
    setSave(false);
  }, []);

  useEffect(() => {
    setTotalBeds(user.totalNumberOfBeds);
    setAvailableBeds(user.availableBeds);
    setIncVal(user.totalAllowedForReservation);
    setAvailableForReservationBeds(user.availableReservationBeds);
    setHour(user.maxTimeToHoldABed);
  }, [user]);

  const saveChanges = async () => {
    user.totalNumberOfBeds = totalBeds;
    user.availableBeds = available_beds;
    user.maxTimeToHoldABed = hour;
    user.totalAllowedForReservation = incVal;
    try {
      var response = await updateShelterDetails(user, user_id, token);
      if (response.status === 200) {
        //   toast.success("Updated Successfully!", {
        //     position: toast.POSITION.BOTTOM_CENTER,
        //   });
        getShelterNewData();
      } else {
        //   toast.error("Fields Cannot be empty", {
        //     position: toast.POSITION.BOTTOM_CENTER,
        //   });
        console.log(response);
      }
    } catch (e) {
      console.log("ERRORChoose a password*");
      // toast.error(e.response.data.message, {
      //   position: toast.POSITION.BOTTOM_CENTER,
      // });
    }
    setSave(false);
  };

  const hourInc = () => {
    if (hour < 4) {
      setHour(hour + 0.5);
    } else {
      setHour(4);
    }
  };
  const hourDec = () => {
    if (hour > 0) {
      setHour(hour - 0.5);
    } else {
      setHour(0);
    }
  };

  const valInc = () => {
    if (incVal < totalBeds) {
      setIncVal(incVal + 1);
    }
  };
  const valDec = () => {
    if (incVal > 0) {
      setIncVal(incVal - 1);
    } else {
      setIncVal(0);
    }
  };
  const increament = () => {
    if (totalBeds < 100) {
      setTotalBeds(totalBeds + 1);
    } else {
      setTotalBeds(100);
    }
  };
  const decreament = () => {
    if (totalBeds > 0) {
      setTotalBeds(totalBeds - 1);
      if (incVal > totalBeds - 1) {
        setIncVal(totalBeds - 1);
      }
    } else {
      setTotalBeds(0);
    }
  };
  return (
    <div>
      <div className="progress_div1">
        <div className="cards">
          <div className="progress_card">
            <div className="headind_pro">TOTAL BEDS</div>

            <div className="progress1">
              <div
                type="number"
                name="totalNumberOfBeds"
                // onChange={handleInput}
                className="cricle_div black"
              >
                {totalBeds}
              </div>
              <div className="calcu_btns">
                <button className="plusbtn" onClick={increament}>
                  +
                </button>
                <button className="plusbtn color_red" onClick={decreament}>
                  -
                </button>
              </div>
            </div>
          </div>

          <div className="progress_card">
            <div className="headind_pro">AVAILABLE BEDS</div>

            <div className="progress1">
              <div
                type="number"
                name="totalNumberOfBeds"
                // onChange={handleInput}
                className="cricle_div"
              >
                {available_beds}
              </div>
              <div className="calcu_btns">
                {/* <button className="plusbtn" onClick={increament}>
                  +
                </button> */}
                <button
                  className="plusbtn color_red"
                  onClick={instantReservation}
                >
                  -
                </button>
              </div>
            </div>
          </div>

          <div className="progress_card">
            <div className="headind_pro">ALLOWED FOR RESERVE</div>

            <div className="progress1">
              <div className="cricle_div color_gold">{incVal}</div>
              <div className="calcu_btns">
                <button className="plusbtn" onClick={valInc}>
                  +
                </button>
                <button className="plusbtn color_red" onClick={valDec}>
                  -
                </button>
              </div>
            </div>
          </div>

          <div className="progress_card">
            <div className="headind_pro">AVAILABLE FOR RESERVE</div>

            <div className="progress1">
              <div className="cricle_div back_gold">
                {available_for_reservation_beds}
              </div>
            </div>
          </div>

          <div className="progress_card">
            <div className="headind_pro">MAXIMUM TIME TO HOLD A BED</div>

            <div className="progress1">
              <div className="cricle_div bluplus">{hour} Hr</div>
              <div className="calcu_btns">
                <button
                  className="plusbtn plusgreen bluplus"
                  onClick={hourInc}
                  disabled={incVal === 0}
                >
                  +
                </button>
                <button
                  className="plusbtn color_red"
                  onClick={hourDec}
                  disabled={incVal === 0}
                >
                  -
                </button>
              </div>
            </div>
          </div>
        </div>
        {save && (
          <button className="save btn btn-sm btn-light" onClick={saveChanges}>
            Save Changes
          </button>
        )}
      </div>
    </div>
  );
}
