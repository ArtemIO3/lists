import './User.css';

const data = {
  user: [
    { id: 1, name: "Оля", age: 20, city: "Киев" },
    { id: 2, name: "Игорь", age: 30, city: "Одесса" },
    { id: 3, name: "Лена", age: 25, city: "Львов" }
  ],
  formatAge: (age) => `${age} років`
};

function UserRow({ id, name, age, city,young }) {
  return (
    <tr style={{ color: young ? 'blue' : age >= 25 ? 'red' : 'black' }}>
      <td>{id}</td>
      <td>{name}</td>
      <td>{data.formatAge(age)}</td>
      <td>{city}</td>
    </tr>
  );
}

export function User() {
  if (data.user.length === 0) {
    return <div>Пользователи отсутствуют</div>;
  }
  return (
    <div className="User">
      {data.user.map(user => (
        <UserRow {...user} />
      ))}
    </div>
  );
}