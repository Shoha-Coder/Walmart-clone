import GridOption from "@/components/GridOption";

const Home: React.FC = () => {
  return (
    <main className="flex-1">
      <div className="grid grid-cols-1 grid-flow-row-dense md:grid-cols-4 gap-3 m-3 md:m6 md:gap-6">
        <GridOption
          title="Sweet gitfts for less"
          image="https://images.pexels.com/photos/704748/pexels-photo-704748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          className="bg-pink-200 h-full md:h-32"
        />
        <GridOption
          title="Shop Wardrobe"
          image="https://images.pexels.com/photos/1148957/pexels-photo-1148957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          className="bg-blue-100 col-span-2 row-span-2"
        />
        <GridOption
          title="Shop Home"
          image="https://images.pexels.com/photos/298842/pexels-photo-298842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          className="bg-pink-200 row-span-2"
        />
        <GridOption
          title="Shop Electronics"
          image="https://images.pexels.com/photos/343457/pexels-photo-343457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          className="bg-yellow-100 h-64"
        />
        <GridOption
          title="Shop Toys"
          image="https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          className="bg-green-100 h-64 col-span-2"
        />
        <GridOption
          title="All you need for Match Day"
          image="https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          className="bg-red-100 col-span-2 row-span-2"
        />
        <GridOption
          title="Shop Gadgets"
          image="https://images.pexels.com/photos/62689/pexels-photo-62689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          className="bg-blue-100 h-64"
        />
        <GridOption
          title="Shop Beauty"
          image="https://images.pexels.com/photos/3373745/pexels-photo-3373745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          className="bg-blue-100 h-64"
        />
        <GridOption
          title="Shop Sports"
          image="https://images.pexels.com/photos/358042/pexels-photo-358042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          className="bg-blue-100 h-64"
        />
        <GridOption
          title="Enjoy Free Shipping"
          image="https://images.pexels.com/photos/1556691/pexels-photo-1556691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          className="bg-rose-100 h-64"
        />
        <GridOption
          title="Flash Deals"
          image="https://images.pexels.com/photos/9017721/pexels-photo-9017721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          className="bg-orange-200 h-64 col-span-2"
        />
      </div>
    </main>
  );
};

export default Home;
