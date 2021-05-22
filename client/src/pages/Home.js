import React from 'react';
import { Image } from 'semantic-ui-react';

const Home = () => {
    return(
        <section>
            <Image src={require('../assets/images/woods-cleanup.jpg').default} fluid />
        </section>
    );
};

export default Home;