import Accordion from "./components/Accordion";

function App (){
    const items = [
        {   
            id : "bdsjk",
            label : 'Can I use React on my project?',
            content : 'You can use React on any project you want.'
        },
        {   
            id : "ithlr",
            label : 'Can I use Javascript on my project?',
            content : 'You can use React on any project you want.'
        },
        {   
            id : "frnkd",
            label : 'Can I use CSS on my project?',
            content : 'You can use React on any project you want.'
        }
    ]

    return <div>
        <Accordion items = { items } />
    </div>
}
export default App;