import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="logo"> 
    <img src="https://gramtarang.org.in/wp-content/uploads/2017/03/CUTM-logo-300x189.jpg" alt=''/>
    
    <div className="App">
      
      <h1>Students Uploads</h1>
      <div class="mani">
      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>View</th>
          <th>Download</th>
        </tr>
        </thead>
        <tbody>
          <tr>
            <td>Manish Kumar</td>
            <td>200101120109@cutm.ac.in</td>
            <td><button>View</button></td>
            <td><button>Download</button></td>
          </tr>
          <tr>
            <td>Vimlesh Kumar</td>
            <td>200101120108@cutm.ac.in</td>
            <td><button>View</button></td>
            <td><button>Download</button></td>
          </tr>
          <tr>
            <td>Shankar Pradhan</td>
            <td>200101120013@cutm.ac.in</td>
            <td><button>View</button></td>
            <td><button>Download</button></td>
          </tr>
          <tr>
            <td>Abdul Naseer</td>
            <td>200101120002@cutm.ac.in</td>
            <td><button>View</button></td>
            <td><button>Download</button></td>
          </tr>
          <tr>
            <td>Srija Tripathy</td>
            <td>200101120006@cutm.ac.in</td>
            <td><button>View</button></td>
            <td><button>Download</button></td>
          </tr>
          <tr>
            <td>Anil Verma</td>
            <td>200101120019@cutm.ac.in</td>
            <td><button>View</button></td>
            <td><button>Download</button></td>
          </tr>
          <tr>
            <td>Tangudu Sravani</td>
            <td>200101120010@cutm.ac.in</td>
            <td><button>View</button></td>
            <td><button>Download</button></td>
          </tr>
          <tr>
            <td>Satish Kumar</td>
            <td>200101120020@cutm.ac.in</td>
            <td><button>View</button></td>
            <td><button>Download</button></td>
          </tr>
          </tbody>
      </table>
      </div>
      </div>
      </div>
  );
}

export default App;
