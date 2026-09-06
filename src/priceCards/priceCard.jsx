export function PriceCard() {
  return (
    <div className="w-dvw my-15 flex flex-col gap-5 items-center">
      <h1>Small Investment</h1>
      <h1>Huge productivity boost</h1>
      <ul className="flex gap-20">
        <li>One time purchase</li>
        <li>All the features in every plan</li>
        <li>30-day money back guarantee</li>
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
    <div className="border rounded-2xl p-10">
      <h1>{props.title}</h1>
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
