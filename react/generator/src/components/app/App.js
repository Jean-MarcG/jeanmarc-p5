import React, {useState} from 'react';
import uniqid from 'uniqid';
import Navbar from '../Navbar/Navbar';
import {getRandomPart} from "../../utils";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import "./App.scss"

const MySwal = withReactContent(Swal)

const generators = {
    generator1: {
        part1: ["G1part1.1", "G1part1.2", "G1part1.3"],
            part2: ["G1part2.1", "G1part2.2", "G1part2.3"],
            part3: ["G1part3.1", "G1part3.2", "G1part3.3"],
    },
    generator2: {
        part1: ["G2part1.1", "G2part1.2", "G2part1.3"],
            part2: ["G2part2.1", "G2part2.2", "G2part2.3"],
            part3: ["G2part3.1", "G2part3.2", "G2part3.3"],
    }
};

const Citations = ({ citations }) => {

    return <ul>
        {citations.map(c => <li key={c.id}>{c.value}</li>)}
    </ul>

}

const Header2 = () => {
    return (
        <div>
            <header>
                <div className="container">
                    <div className="title-container line">
                        <h1 className="uppercase">
                            générateur de citations
                        </h1>
                    </div>
                </div>
            </header>
        </div>
    )
}
 
const Footer2 = () => {
    return (
        <section>
            <hr />
            <footer className="footer">
                <div className="footer-container">
                    <p>JMG 2020 - Générateur de citations React - </p>
                </div>

            </footer>
        </section>
    )
}

const App = () => {

    const [generator, setGenerator] = useState('generator1');
    const [nbCitations, setNbCitations] = useState(1);
    const [citations, setCitations] = useState([]);


    const handleSubmit = (e) => {
        e.preventDefault()

        const _citations = []
        for(let i = 0; i < nbCitations; i++){
            const c = {
                id: uniqid(),
                value: `${getRandomPart(generators, generator, 'part1')} ${getRandomPart(generators, generator, 'part2')} ${getRandomPart(generators, generator, 'part3')}`
            }
            _citations.push(c)
        }
        setCitations(_citations);
        
        const htmlCitation2 = '<ul>' +
        _citations.map((citation) => '<li>' + citation.value + '</li>') +
    '</ul>';
    MySwal.fire({
        title: <p>Hello World</p>,
        footer: 'Copyright 2018',
        html: htmlCitation2
      }).then(() => {
        return MySwal.fire(<p>Shorthand works too</p>)
      })
    }


    return (
        <div>
            <Navbar />
            <Header2 />
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="generator1">Générateur 1</label>
                    <input
                        id="generator1"
                        name="catgeory"
                        type="radio"
                        value="generator1"
                        onChange={() => setGenerator('generator1')}
                    />

                    <label htmlFor="generator2">Générateur 2</label>
                    <input
                        id="generator2"
                        name="catgeory"
                        type="radio"
                        value="generator2"
                        onChange={() => setGenerator('generator2')}
                    />
                </div>

                <div>
                    <label>Nb de citations</label>
                    <select
                        name="nbCitations"
                        onChange={e => setNbCitations(parseInt(e.target.value))}
                    >
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                </div>

                <button className="generate" type="submit">Générer</button>
            </form>

            <Citations
                citations={citations}
            />

            <Footer2 />

        </div>
    );
}

export default App;
