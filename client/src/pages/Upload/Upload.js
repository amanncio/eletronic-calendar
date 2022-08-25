import React, { useState } from 'react'
import "./Upload.css"
import { Button } from '@mui/material'
import Axios from "axios"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


//Calendário
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = {
    "pt-BR": require("date-fns/locale/pt-BR"),
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
})
//Calendario - Fim


const Upload = (props) => {

    //Variáveis 
    const [activityName, setActivityName] = useState(""); 
    const [description, setDescription] = useState(""); 
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [status, setStatus] = useState("");

    const onChangeSelect = (event) => {
        setStatus(event.target.value)
        console.log(event.target.value)
    }

    const upload = () => {
        Axios.post("http://localhost:3001/upload/atividade", {
            activityName: activityName,
            description: description,
            startDate: startDate,
            endDate: endDate,
            status: status,
        }).then(() => {
            alert(`${activityName} agendado(a) com sucesso!!!`)
        });
    };

    return (
        <div className='upload'>
            <h1>Agende Uma Atividade</h1>
            <div className='upload-form'>
                <input
                    type="text"
                    placeholder="Nome da Atividade"
                    onChange={(event) => {
                        setActivityName(event.target.value)
                        // ((e) => setNewEvent({ ...newEvent, activityName: e.target.value }))
                    }}
                />
                <input type="text"
                    placeholder="Descrição..."
                    onChange={(event) => {
                        setDescription(event.target.value);
                    }}  
                />
                
                <span className='span-mt'>Data de Início:</span>
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                <span>Data de Término:</span>
                <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />

                <div className='select'>
                    <span>Status:</span>
                    <select required defaultValue="status" id="status" onChange={onChangeSelect}>
                        <option disabled value="status">Escolha o status da atividade</option>
                        <option value="pendente">Pendente</option>
                        <option value="concluida">Concluída</option>
                        <option value="cancelada">Cancelada</option>
                    </select>
                </div>
                
                <Button className='btn-calendar' onClick={upload} variant="contained" color="success">Agendar</Button>
            </div>
            <div className='calendar'>
                <Calendar
                    localizer={localizer}
                    // events={allEvents} 
                    startAccessor="start" 
                    endAccessor="end" 
                    style={{ height: 500, margin: "50px" }}
                />
            </div>
        </div>
  )
}

export default Upload;




























// import format from "date-fns/format";
// import getDay from "date-fns/getDay";
// import parse from "date-fns/parse";
// import startOfWeek from "date-fns/startOfWeek";
// import React, { useState } from "react";
// import { Calendar, dateFnsLocalizer } from "react-big-calendar";
// import "react-big-calendar/lib/css/react-big-calendar.css";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import "./Upload.css"
// import { Button } from '@mui/material'

// const locales = {
//     "pt-BR": require("date-fns/locale/pt-BR"),
// };
// const localizer = dateFnsLocalizer({
//     format,
//     parse,
//     startOfWeek,
//     getDay,
//     locales,
// });

// const events = [
//     {
//         title: "Big Meeting",
//         allDay: true,
//         start: new Date(2022, 8, 30),
//         end: new Date(2022, 9, 2),
//         status: "pendente"
//     },
//     {
//         title: "Vacation",
//         start: new Date(2021, 6, 7),
//         end: new Date(2021, 6, 10),
//     },
//     {
//         title: "Conference",
//         start: new Date(2022, 8, 25),
//         end: new Date(2021, 6, 28),
//     },
// ];

// const Upload = (props) => {
//     const [activityName, setActivityName] = useState(""); 
//     const [description, setDescription] = useState(""); 
//     const [startDate, setStartDate] = useState("")
//     const [endDate, setEndDate] = useState("")
//     const [status, setStatus] = useState("")

//     const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "", description: "", status: ""});
//     const [allEvents, setAllEvents] = useState(events);

//     function handleAddEvent() {
//         setAllEvents([...allEvents, newEvent]);
//     }

//     return (
//         <>  
//             <div className="upload">
//                 <h1>Angenda Eletrônica</h1>
//                 <h2>Agende Uma Atividade</h2>
//                 <div className="upload-form">
//                     <input type="text" placeholder="Nome da Atividade"  value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                    
//                     <DatePicker placeholderText="Inicio da Atividade"  selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
//                     <div></div>
//                     <DatePicker placeholderText="Término da Atividade" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
//                     <Button className="btn-calendar" variant="contained" color="success" onClick={handleAddEvent}>Agendar</Button>
//                 </div>
                
//             </div>
//             <div>
//                 <Calendar style={{ height: 500, margin: "50px" }} localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" />
//             </div>
//         </> 
//     );
// }

// export default Upload;
















// import React, { useState } from 'react'
// import "./Upload.css"
// import { Button } from '@mui/material'


// const Upload = (props) => {
//     const [activityName, setActivityName] = useState(""); 
//     const [description, setDescription] = useState(""); 
//     const [startDate, setStartDate] = useState("")
//     const [endDate, setEndDate] = useState("")
//     const [status, setStatus] = useState("")
    
//     //TESTES
//     // if(props.loggedIn == true) {
//     //     console.log("test")
//     // }

//   return (
//     <div className='upload'>
//         <h1>Agende Uma Atividade</h1>
//         <div className='upload-form'>
//             <input
//                 type="text"
//                 placeholder="Nome da Atividade"
//                 onChange={(event) => {
//                     setActivityName(event.target.value);
//                 }}
//             />
//             <input type="text"
//                 placeholder="Descrição..."
//                 onChange={(event) => {
//                     setDescription(event.target.value);
//                 }}  
//             />
//             <div className='select'>
//                 <select name="select">
//                     <option value="v1">Pendente</option>
//                     <option value="v2">Concluída</option>
//                     <option value="v3">Cancelada</option>
//                 </select>
//             </div>
            

//             <Button variant="contained" color="success">Agendar</Button>
//         </div>
//     </div>
//   )
// }

// export default Upload;
// //2:17