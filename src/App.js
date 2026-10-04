import './App.css';
import content from './content.json';

function App() {
  return (
    <div className='page'>
      <div className='header'>
        <div className="logo">
            <pre>{
`            10000000000000       00001    10000            
           00111111000000        0000    1100000           
         00001                  0000        00001          
       10100                   10000         0000          
     00000                     0001           0000         
     00011                    00000            0000        
      11011                   0000             10001       
        00000                10001              00001      
          0000              10000                0000      
           10000000000000   0000                  0000     
             111101110000  10000                  10000    
                   11000   0000                   0000     
                  0000    00001                  0000      
                10001    11000                  00011      
               0000      0001                  10001       
             00001      10000                 10000        
            0000        0010                  1001         
          0001         10001                 0000          
        10000          0001                 00001          
       1000           0000        00000000001000           
     00001           10001       00000000000000            
`}
            </pre>
        </div>
      </div>
      <div className='main'>
        {Object.keys(content).map((category) => (
          <section key={category}>
            <p className="title">{category}</p>
            <div className="border">
              {content[category].map((item) => (
                <a key={item.name} className="link" href={item.link} target="_blank">{item.name}</a>
              ))}
            </div>
          </section>
        ))}
      </div>
      <div className='footer'></div>
    </div>
  );
}

export default App;
