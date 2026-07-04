export default function Card({ name, id: _id }: { name: string; id: number }) {
  return (
    <div className="p-2 border">
      <h2>{name}</h2>
      {/*<p>{_id}</p>*/}
    </div>
  );
}
