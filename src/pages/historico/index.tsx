import DataRow from "@/componentes/data-table/card-historico";
import Footer from "@/componentes/footer/footer";
import SubHeader from "@/componentes/sub-header/sub-header"

const Historico = () =>{
    return(
        <>
        <SubHeader/>
        <main>
            <table>
                <DataRow/>
                <DataRow/>
                <DataRow/>
                <DataRow/>
                <DataRow/>
                <DataRow/>
                <DataRow/>
            </table>
        </main>
        <Footer/>
        </>
    )
}

export default Historico;