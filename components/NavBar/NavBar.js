import CartWidget from "../CartWidget/CartWidget"
const NavBar = () => {
    return(
        <nav>
            <h3>Ecommerce</h3>
            <div>
                <button>toyota supra mk4</button>
                <button>nissan skyline r34</button>
                <button>cg titan</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar