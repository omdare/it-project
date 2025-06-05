// import '../styles/card.css'
import img_repl from '../assets/bmw.jpg'
import brandlogorepl from "../assets/bmw.png"




const CarCard = ({
    brandLogo,
    carName,
    carImage,
    brand,
    modelYear,
    bodyType,
    engine,
    transmission,
    interior_exterior_colours = ['blue', "white",'yellow', "red"],
    seats,
    price,
    currency
})=>{
    return <div className="card">
        <div className="image">
            <img src={carImage || img_repl} alt="" />
        </div>
        <div className="car_info">
            <div className="header_info">
                <img src={brandLogo || brandlogorepl} alt="" />
                <div className="info_name">
                    <p>{carName || "2019 Audi S4 Premium Plus"}</p> 
                    <p>{brand || 'BMW'} - Model year {modelYear || "2021"}</p>
                </div>
            </div>
            <div className="body_info">
                <div className="tile">
                    <p>Body type</p>
                    <p>{bodyType || "Sedan"}</p>
                </div>
                  <div className="tile">
                    <p>Engine</p>
                    <p>{engine|| "2.01.14 16v GDI DOHC Turbo"}</p>
                </div>
                  <div className="tile">
                    <p>Transmission</p>
                    <p>{transmission || "8-Speed Automatic"}</p>
                </div>
                  <div className="tile">
                    <p>Interior and exterior colours</p>
                    <div className="colours">
                    {
                        typeof interior_exterior_colours === 'object' && interior_exterior_colours.map((colour, i)=>{
                            let style = {}

                            if (i > 0){
                            style.position = 'relative'
                               style.left = i * -3;
                            }
                            return <div className="color_box" style={{...style , backgroundColor: colour}}></div>
                        })
                    }
                    </div>
                </div>
                  <div className="tile">
                    <p>Seats</p>
                    <p>{seats || "5"}</p>
                </div>
                <div className="price">
                    <p>{currency || '$'}{price || "138"}</p>
                </div>
            </div>
        </div>
    </div>
}


export default CarCard