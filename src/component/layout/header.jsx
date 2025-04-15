import "./header.css"
export default function Header() {
    return (
        <ul>
            <li><a class="active" href="/">Home</a></li>
            <li><a href="/user">User</a></li>
            <li><a href="/product">Product</a></li>
        </ul>

    )
}