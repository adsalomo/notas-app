import React, { useState } from 'react'

export const NotasApp = () => {

    const [ notas, setNotas ] = useState([]);
    const [ valoresForm, setValoresForm ] = useState({});
    const { nombre = '', color = '#563d7c', fechaRecordatorio = '' } = valoresForm;

    const handleOnChange = ({ target }) => {
        setValoresForm({ ...valoresForm, [ target.name ]: target.value });
    }

    const handleOnSubtmit = (e) => {
        e.preventDefault();
        setNotas([ ...notas, valoresForm ]);
        setValoresForm({ nombre: '', color: '#563d7c', fechaRecordatorio: '' });
    }

  return (
    <div className='container mt-2 mb-2'>
        <div className='row'>
            <div className='col'>
                <h3>Notas App</h3>
                <hr />
            </div>
        </div>
        <div className='row'>
            <div className='col'>
                <form onSubmit={ (e) => handleOnSubtmit(e) }>
                    <div className="mb-3">
                        <label className="form-label">Nombre</label>
                        <input type="text" required className="form-control" onChange={ (e) => handleOnChange(e) }
                            placeholder="Escribe el nombre de la nota" name='nombre' value={nombre} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Color Nota</label>
                        <input type="color" required name='color' onChange={ (e) => handleOnChange(e) }
                            className="form-control form-control-color" value={color} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Fecha Recordatorio</label>
                        <input type="date" required onChange={ (e) => handleOnChange(e) }
                            className="form-control" name='fechaRecordatorio' value={fechaRecordatorio} />
                    </div>
                    <div className="mb-3">
                        <button className='btn btn-primary btn-sm'>Guardar</button>
                    </div>
                </form>
            </div>
        </div>
        {
            notas.length > 0 
            && 
            <div className='row'>
                <div className='col'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Color</th>
                                <th>Fecha Recordatorio</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                notas.map(nota => {
                                    return <tr key={nota.nombre}>
                                        <td>{ nota.nombre }</td>
                                        <td> <input type='color' disabled value={nota.color} /> </td>
                                        <td>{ nota.fechaRecordatorio }</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        }
    </div>
  )
}
