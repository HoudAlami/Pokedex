import Header from '../../components/Header/Header';
import Links from '../../components/Links/Links';

type Pokemon = {
  name: string;
  url: string;
};

type HomeProps = {
  pokemons: Pokemon[];
};

function Home({ pokemons }: HomeProps) {
  return (
    <div className="home">
      <Header />
      <Links />
    </div>
  );
}

export default Home;
