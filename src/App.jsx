import React from 'react';
import Card from './Cards';
import Data from './Data'


const App = () => (
    <>
        <h1 className="heading__style">list of top 5 netflix series</h1>
        {Data.map((val) => {
            return (
                <Card
                    key={val.id}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    sname={val.sname}
                    link={val.links}
                />
            );
        }

        )}

    </>
);
export default App;


