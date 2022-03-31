import React, { useState, useEffect } from 'react'; 
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);

    console.log(results);

    useEffect(() => {
    
       const search = async () => {
           const { data } = await axios.get('https://en.wikipedia.org/w/api.php',{
            params: {
                action: 'query',
                list: 'search', 
                origin: '*',
                format: 'json',
                srsearch: term,
            }
          });
          setResults(data.query.search);   
        };

        if(term && !results.length){
            search();
        } else {
            const timeoutId = setTimeout(() => {
                if (term){
                  search();
                }
              }, 500);
        

        return () => {
            clearTimeout(timeoutId);
        }
      }
    }, [term, results.length]);

    //dangerouslySetInnerHTML leaves app open to XSS attack
    const renderedResults = results.map((result) => {
        return(
         <div key={result.pageid} className  = "item">
            <div className = 'right floated content'>
                <a
                 className="ui button"
                 href={`https://en.wikipeida.org?curid=${result.pageid}`}
                 >
                     Go
                </a>
            </div>
            <div className = "content">
                <div className = "header">
                    {result.title}
                </div>
                <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
            </div>
        </div>
        );
    });

    return (
        <div>
            <h5>Enter Search Term</h5>
            <div className="ui form">
                <div className="field">
                  <div className="wide ui column center page grid">
                    <input
                    value={term}
                    onChange={e => setTerm(e.target.value)}
                    className="input" />
                  </div>
                </div>
            </div>
            <div className="ui celled list">
                { renderedResults }
            </div>
        </div>
    );
};

export default Search;