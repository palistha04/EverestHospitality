import React, {useState} from 'react';
import Upcoming from './UpcomingCard';
import Header from './Header';

const UpcomingShowsPage = () => {

  const[items, setItems] = useState(Upcoming);

  return (
    <>
    <Header />
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Upcoming Shows</h1>
      <div className="grid grid-cols-3 grid-rows-8 gap-4 mt-8">
      {
        items.map((elem)=> {
          const{id, title, description, venue, image} = elem;

          return(
            <>
                <div className="max-w-sm rounded overflow-hidden shadow-lg mt-12">
                   <img src={image} alt={title} className="h-56  object-fit mx-auto" />

                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">{title}</div>
                      <p className="text-gray-700 text-base">{description}</p>
                    </div>

                    <div className="px-6 py-2 bg-gray-200">
                      <span className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">
                        {venue}
                      </span>
                    </div>
                </div>
                
            </>
          )
        }) 
      }
      </div>
      
    </div>
    </>
  );
};

export default UpcomingShowsPage;
