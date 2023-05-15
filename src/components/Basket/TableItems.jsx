import React from "react";
import motor from "../../Assets/img/Motor.png";

function TableItems() {
  return (
    <tbody>
      <tr>
        <td>
          <img src={motor} alt="Motor" className="w-[130px] mt-5" />
        </td>
        <td className="text-left text-[20px] font-bold text-RegisterGray">
          Лодочный мотор HIDEA (Хайди) HD 9.9 FHS
        </td>
        <td className="text-center text-[20px] font-bold text-RegisterGray ">
          <span className="bg-[#f1f1f1] py-2 px-6">1</span>
        </td>
        <td className="text-center text-[20px] font-bold text-RegisterGray">
          43 400 р.
        </td>
      </tr>
    </tbody>
  );
}

export default TableItems;
