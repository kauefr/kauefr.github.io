import { useState } from "react"
import CentavosInput from "./CentavosInput";

export default function Preparo() {
    const [v, setv] = useState(0);

    return <>
        <section className='section'>
            <h3 className='title has-text-centered'>Cálculo do Preparo</h3>
            <form className='box container is-max-desktop'>
                <div className='field'>
                    <label className='label'>Valor da Causa</label>
                    <div className='control'>
                        <CentavosInput value={v} onChange={setv} className='input' />
                    </div>
                </div>
                <div className='field'>
                    <label className='label'>Sentença Condenatória?</label>
                    <div className='control'>
                        <label className='radio'>
                            <input type='radio' name='sentencaCondenatoria' value='Sim' /> Sim
                    </label>
                        <label className='radio'>
                            <input type='radio' name='sentencaCondenatoria' value='Não' /> Não
                    </label>
                    </div>
                </div>
            </form>
        </section>
    </>;
}