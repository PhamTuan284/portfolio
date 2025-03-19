import React, { useMemo, useCallback, useState, useEffect } from "react";

const handleCheckboxChange = (value: any) => {
  console.log(value);
};

const CheckboxList = ({ items }: any) => {

  useEffect(() => {
    console.log(items)
  }, [items])

  const memoizedCheckboxes = useMemo(() => {
    // Tạo danh sách checkbox
    return items.map((item: any) => (
      <input
        key={item.id}
        type="checkbox"
        value={item.id}
        // Xử lý sự kiện khi checkbox thay đổi
        onChange={(e) => handleCheckboxChange(e.target.value)}
      />
    ));
  }, [items]);

  return <div>{memoizedCheckboxes}</div>;
};

export default CheckboxList;

// const CheckboxList = ({ items }) => {
//   const [checkedItems, setCheckedItems] = useState({});

//   const handleCheckboxChange = useCallback(
//     (itemId) => {
//       setCheckedItems((prevCheckedItems) => ({
//         ...prevCheckedItems,
//         [itemId]: !prevCheckedItems[itemId],
//       }));
//     },
//     []
//   );


//   return (
//     <div>
//       {items.map((item) => (
//         <label key={item.id}>
//           <input
//             type="checkbox"
//             value={item.id}
//             checked={checkedItems[item.id] || false}
//             onChange={(e) => handleCheckboxChange(e.target.value)}
//           />
//           {item.label}
//         </label>
//       ))}
//     </div>
//   );
// };

// export default CheckboxList;
