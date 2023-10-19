import React from 'react';

function MainTable(props) {
  const { data, filterData } = props;
  console.log(data);
  const handleClick = (id) => {
    filterData(id);
  };
  return (
    <div>
      <ul className=" space-y-2">
        {data.map((item) => {
          return (
            <div>
              <li key={item.key} className="flex space-x-10">
                <span>{item.id}</span>
                <span>{item.name}</span>
                <span>{item.date}</span>

                <button
                  className="bg-red-200 px-2 py-1 rounded-lg text-red-500 hover:bg-red-300 hover:rext-red-600"
                  onClick={() => {
                    handleClick(item.id);
                  }}
                >
                  删除
                </button>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default MainTable;
