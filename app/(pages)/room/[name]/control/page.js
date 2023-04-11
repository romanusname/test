import part from '@part'
export default async function page({params}) {
    let name = params.name
    let params2 = params
    //setParams={['createSlot',params]}
    return(
        <part.main>
            <section>
                <flex area={'middle'}>
                    <h2 setModal={['createSlot',true]} setParams={['createSlot',params2]}>create slot</h2>
                </flex>
            </section>
        </part.main>
    )
}