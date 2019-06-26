import React, { Component } from 'react'
import torneoService from '../../services/torneoService'

export class Torneos extends Component {

    state = {
        torneos: []
    }

    //Componente tipo clase
    componentDidMount() {
        this.setState({
            torneos: torneoService.getTorneos()
        });
    }

    render() {
        const torneos = this.state.torneos;
        return (
            <React.Fragment>
                <h1>Torneos <small>Regionales</small></h1>
                <hr></hr>
                <div className="card-columns">
                    {/*Tarjeta de los héroes*/}

                    {torneos.map(torneo => {
                        return (
                            <div className="card animated fadeIn fast">
                            <img src={torneo.img} alt={torneo.nombre} className="card-img-top img-fluid" />
                            <div className="card-body">
                            <h4 className="card-title">{torneo.nombre}</h4>
                            <button type="button" className="btn btn-outline-primary btn-block">
                                Ver más...
                            </button>
                        </div>
                    </div>
                        )
                    })}
                    
                </div>
            </React.Fragment>
        )
    }
}

export default Torneos