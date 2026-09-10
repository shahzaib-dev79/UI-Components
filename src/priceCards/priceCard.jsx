export function PriceCard() {
  return (
    <div className="w-dvw my-15 flex flex-col gap-3 items-center">
      <h1 className="text-black font-extrabold">Small Investment</h1>
      <h1 className="text-5xl font-semibold ">Huge productivity boost</h1>
      <ul className="flex flex-wrap items-center justify-center gap-y-2 gap-x-4 text-sm text-zinc-800">
        <span>One time purchase</span>
        <span>All the features in every plan</span>
        <span>30-day money back guarantee</span>
      </ul>
      <div>
        <Card
          title="Personal"
          subtitle="For AI enthusiasts"
          discPrice={35}
          price={50}
          buttonText="Buy Personal License"
          numOfDevices="1 Mac Device"
          features={[
            "Unlock all pro features",
            "Perpetual license",
            "One year of updates",
            "Email support",
          ]}
        />
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <div className="card border rounded-2xl p-7">
      <h1 className="">{props.title}</h1>
      <h2>{props.subtitle}</h2>
      <div>
        <p>${props.discPrice}</p>
        <p>{props.price}</p>
      </div>
      <button>{props.buttonText}</button>
      <p>{props.numOfDevices}</p>
      {props.features.map((feature, index) => (
        <p key={index}>{feature}</p>
      ))}
    </div>
  );
}
