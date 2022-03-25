import useSWR from "swr";

const Dashboard = () => {
  const { data } = useSWR("/api/items");

  return (
    <div>
      {data ? (
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              {item.item_id} : {item.fruit}
            </li>
          ))}
        </ul>
      ) : (
        "loading...."
      )}
    </div>
  );
};

export default Dashboard;
