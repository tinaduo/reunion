import Accordion from "../../components/Accordion";

export default function Home() {
  return (
    <>
    <div className="bg-[#EBEADE] mx-60 md:max-w-[440px] max-w-[calc(100vw-15px)] space-y-32">
      <section>
        <img
          className="mt-20"
          src="/images/headline.png"
          alt="Reunion Headline"
        />
        <div className="flex justify-between">
          <h2 className="justify-center text-black text-2xl/6 font-bold font- uppercase">
            sunday july 20th 2025
            <br />
            2 pm - 8 pm
          </h2>
          <h2 className="justify-center text-right text-black text-2xl/6 font-bold font-['Arial_Narrow'] uppercase">
            183 E Georgia St, 
            <br />
            Vancouver, BC
          </h2>
        </div>
    </section>

    <section>
      <div className="-space-y-8">
        <div className="flex space-x-14">
          <a
            className="text-center justify-center text-black"
            href="#menu"
          >
            <img
              className="w-52"
              src="/images/menu-button.png"
              alt="Menu Button"
            />
          </a>
          <a
            className="text-center justify-center text-black"
            href="#where"
          >
            <img
              className="w-52"
              src="/images/where-button.png"
              alt="Where Button"
            />
          </a>
        </div>
        <div className="flex justify-end space-x-8">
          <a
            className="text-center justify-center text-black"
            href="#info"
          >
            <img
              className="w-56"
              src="/images/info-button.png"
              alt="info Button"
            />
          </a>
          <a
            className="text-center justify-center text-black"
            href="#faq"
          >
            <img
              className="w-56"
              src="/images/faq-button.png"
              alt="faq Button"
            />
          </a>
        </div>
      </div>
    </section>

    <section 
      id="menu"
      className="flex flex-col justify-center items-center"
    >
      <img
        className="w-full pb-8"
        src="/images/menu-headline.png"
        alt="Menu Headline"
      />
      <img
        className="w-full"
        src="/images/pizza-headline.svg"
        alt="Pizza Headline"
      />
        <p className="font-['Arial_Narrow'] text-4xl w-full pt-16 lowercase">
          <span className="text-black text-4xl font-normal lowercase">
            all pizzas made fresh, served hot and crisp.
          </span>
          <br/><br/>
          <span className="text-black font-bold">
            Margherita<br/></span>
          <span className="text-black">
            Tomato sauce, mozzarella, fresh basil<br/></span><br/>
          <span className="text-black font-bold">
            Cheese<br/></span>
          <span className="text-black">
            A blend of cheeses<br/></span><br/>
          <span className="text-black font-bold">
            Pepperoni<br/></span>
          <span className="text-black">
            Crispy pepperoni, mozzarella, tomato sauce<br/></span>
          <br/>
          <span className="text-black font-bold">
            Prosciutto<br/></span>
          <span className="text-black">
            Prosciutto, arugula, shaved cheese<br/></span>
          <br/>
          <span className="text-black font-bold">
            Pizza Roulette
            <br/>
          </span>
          <span className="text-black">
            To feed your gambling addiction. A pizza with a surprise topping<br/>
            </span>
          <br/>
        </p>

      <div className="flex flex-col space-x-16 pt-4">
          <h3 className="text-center justify-center text-black text-8xl font-bold font-['Arial_Narrow'] uppercase">
            toppings
          </h3>
          <p className="text-center justify-center text-black text-4xl font-normal font-['Arial_Narrow'] lowercase"> 
            Want more on it? 
          </p>
            <ul className="text-left text-black text-4xl font-normal font-['Arial_Narrow'] lowercase pt-8"> 
              <li>✷ Confit garlic</li>
              <li>✷ Chili flakes</li>
              <li>✷ Fresh basil</li>
              <li>✷ Pesto</li>
              <li>✷ Nice cheeses</li>
              <li>✷ Nice meats</li>
            </ul>
        </div>
    </section>

    <section
      id="info"
      className="flex flex-col justify-center items-center"
    >
      <img
        className="w-full pb-8"
        src="/images/info-headline.png"
        alt="Info Headline"
      />
      <p className="font-['Arial_Narrow'] text-4xl w-full pt-8 lowercase">
        <span className="font-bold">Needed!</span><br />
        Everyone - bring food/snacks/drinks.
        <br />
        <br /> Bee - snack & paper utensil
        <br />
        <br />
        <span className="font-bold">Important</span>
        <br />
        ✷ If you haven't, please put your info down in the Pinned Google doc.
        <br />
        ✷ The budget on food is $50. Please keep your receipt. We will divide the money and pay each other.
        <br />
        ✷ Dinner, snacks, drinks will be upstairs in the multi-purpose room. Please throw any trash in the black garbage bags.
      </p>
    </section>

    <section
      id="where"
      className="flex flex-col justify-center items-center"
    >
      <img
        className="w-full pb-8"
        src="/images/where-headline.png"
        alt="Where Headline"
      />


      <a href="https://maps.app.goo.gl/oyy1fj68wV2HFFeBA" target="_blank" rel="noopener noreferrer">
      <h3 className="text-center justify-center text-black text-7xl pt-16 font-bold font-['Arial_Narrow'] uppercase">
        183 E Georgia St, Vancouver, BC
        <br />
      </h3>
      </a>
      <p className="font-['Arial_Narrow'] text-4xl w-full pt-8 lowercase">
        <span className="font-bold">How to get there?</span><br />
        ✷ Skytrain: Main Street-Science World Station<br />
        ✷ Bus: 3, 8, 19, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34<br />
        ✷ Car: <a href="https://g.co/kgs/qQcJzP2" className="underline" target="_blank" rel="noopener noreferrer">Parking</a> is available on the street and in the lot behind the building.
        <br />
        <br />
      </p>
    </section>  

    <section
      id="faq"
      className="flex flex-col justify-center items-center pb-20">
      <img
        className="w-full pb-8"
        src="/images/faq-headline.png"
        alt="FAQ Headline"
      />
        <Accordion />
    </section>

    <section className="pb-16">
      <img
          className="pb-6 mt-20"
          src="/images/thank-you.png"
          alt="Thanks Headline"
        />
        <div className="flex justify-between">
          <h2 className="justify-center text-black text-2xl/6 font-bold font-['Arial_Narrow'] uppercase">
            made by tina duong
            <br />
            li
          </h2>
          <h2 className="justify-center text-right text-black text-2xl/6 font-bold font-['Arial_Narrow'] uppercase">
            with the support
            <br />
            max shuyu li
          </h2>
        </div>
      </section>
    </div>
    </>
  );
}
