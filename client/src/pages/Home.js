import React from 'react';

const Home = () => {
    return(
        <>
            <section id='search' className='flex-row justify-center align-center'>
                <div>
                    <h2>cleaning the world,<br /> one community at a time</h2>
                    <p>Find a community cleanup near you</p>
                    {/* <Form>
                        <Form.Field>
                            <label className='none'>Search Zipcode</label>
                            <input placeholder='Search by Zipcode' />
                        </Form.Field>
                    </Form> */}
                </div>
            </section>
        </>
    );
};

export default Home;