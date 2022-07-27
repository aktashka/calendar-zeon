import dayjs from "dayjs";
import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
export default function CalendarHeader() {
    const { monthIndex, setMonthIndex } = useContext(GlobalContext);
    function handlePrevMonth() {
        setMonthIndex(monthIndex - 1);
    }
    function handleNextMonth() {
        setMonthIndex(monthIndex + 1);
    }
    function handleReset() {
        setMonthIndex(
            monthIndex === dayjs().month()
                ? monthIndex + Math.random()
                : dayjs().month()
        );
    }
    return (
        <header className="px-4 py-2 flex justify-between bg-black-500 items-center">

            <button
                onClick={handleReset}
                className="border-black-300 rounded text-black-300 bg-red-600 py-2 px-4 mr-5"
            >
                Today
            </button>

            <h2 className="mr-4 text-3xl text-gray-700 font-bold">
                {dayjs(new Date(dayjs().year(), monthIndex)).format(
                    "MMMM YYYY"
                )}
            </h2>
            <div>
                <button onClick={handlePrevMonth}>
                    <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
                        chevron_left
                    </span>
                </button>
                <button onClick={handleNextMonth}>
                    <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
                        chevron_right
                    </span>
                </button>
            </div>
        </header>
    );
}
