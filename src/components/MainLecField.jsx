import React from 'react'
import styled from 'styled-components'
import { AiOutlineMenu } from "react-icons/ai";

const MainLecField = (props) => {

    const LecFieldMain = styled.div `
        width: 400px;
        height: 200px;
    `
    const LecFieldTitle = styled.div `
        width: 400px;
        height: 50px;
        line-height: 50px;
        background-color: #29b2ef;
        display: flex;
        margin-top: 50px;
    `
    const Linediv = styled.div`
        width : 50px;
        height : 100%;
        padding : 8px 0 0 8px;
    `
    const Textdiv = styled.div`
        width : 350px;
        height : 100%;
        padding-left: 10px;
        color: #fff;
        font-size: 20px;
        font-weight: 500;
    `
    const LecFieldContents = styled.div `
        width: 400px;
        height: 100px;
        display: flex;
        flex-wrap: wrap;
        margin: 10px 0;
    `
    const LecDiv = styled.div `
        width: 100px;
        height: 120px;
        margin: 10px auto;
    `
    const LImg = styled.img `
        width: 100px;
        height: 100px;
    `
    const LName = styled.div `
        width: 100px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        font-size: 20px;
        font-weight: 700;
    `

    return (
        <LecFieldMain>
            <LecFieldTitle>
                <Linediv><AiOutlineMenu size="30" color="gray" /></Linediv>
                <Textdiv>{props.name}</Textdiv>
            </LecFieldTitle>
            <LecFieldContents>
                <LecDiv><LImg src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEX6xVL////6wkX6w0r++vH97Mr6xE36w0v6wkb6wUL6wT/847P+9eT///36xlP+8dr97tH7znH83J796ML70Hj6ymX+9+n72JP71Yj+8dn6ymL83qT84Kv/+/T836n71o370Hf85bn704L6zWxs+jlpAAAE7klEQVR4nO3b63KqOgAFYEgkJNxFEcS7vv87HrDb0xJCEnr2kTizvpn+au1kNfdLPQ8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABUGCciiiLSfQnBKVu6PDaYRPOjVHjNsUhOfi9d5cGxyQgJ31bU3yGFP5DSiR9kJDsn/sgquGRuhySBVGJ1QibWxTjeH/sL5W8u9gx2CXk7na93ijNnM1oljEptvl7qbEabhCJQp5IylpGTQ6tFQp7bBOwklYvVaE4o9pYBO6VYIoOeMaHY2Af0/WJqslmOKWHYzAnox5+XkJ7mBEw+r5Xy46wqbB0cTQ0JRTonYPl5Y2lYj2PsNoeyLs/BeJGaR0ul0NEnHM8UmyriNAwpJYLdN4NOmmZLhdDSJyRSvvQufvS0brN4+VGTtXvjaE+bkG2lhBe5o4Vi/armwsFxtKdNGEor7kTR0ZjYPuvx9LYiz6RNyOPhN2PlWMlE/4e4u7oN1ieUVmzlRE+jWb5xtI0aEsrfPE6OJQ4fZOjrUPpm4eSEZzCrlfqVg6syk1kjjb/K3JzzdPSzxWjRltbRp2WcN+N3drUgH9VW563avgQNI59xoN8zrLynDqH2h4o7PEP8ZNg9aQ5KV0HdCu5+VRp2wHQ6YW8XX4nrIf/zKcbqto6cbq6mkyi+MkXsthxOTyGmhOxhTthtnQ7uDjvGE2Fud2B6uri6uTCf6ltG9IvMzSHH5mbmYdEX+2p8ONkbbW7XGL/ZVePWxYh2d8Ck0t8BvzwcbKjW9/itzR3U6XMTPg9Ha/NNYuDeiGqd0OsPR7O6MFxkuNdO5yTshIRu40STsiBvKri1mQm9vrmKrNnspiI6d3kxP2Gv65SV6oVUp3Zt+fa7hB1GRRsrmuvGtTvEXyf0nu31PEqYuNYR5Zd7q3lVwDO5Q55cW9cIqTftZjYyxuRFq2vThbzD3SmmbO05BZXPVP+3ohoxT1XQTCpfPk5Ik7tupdK6kpBVqWLpz+TN33gojLqeetZdyUgvbpZqpSzrCrIdFV/Ie4bRJah43l3k028rs+GUkS6W8DnmNVJzY3IT8xupgPzVzUqhLjpbD3/BzMH4r3m9oDwOyxmN1iXt8HPhd/mTqzKj/LJP0ZHf4bsxJo/vcrLx01ipBtigCe63Yvw28yL9htsidRj9/DsH6683PzzajleW0kBDpPk8KTPx405Gtai5L9EPhXRwvQoO9aW8qbYHw/JFirOL/Hz1IkE6IqrOozOqdIF8HlE8TpswbKSRfAX8csr3RbFXbhODBZal/G4d0D8M7rjt/zLfru9vpKp73CmDuczuPF+yX2Ak5eqNqtLwRVA41Ug1ljimYa31O2b5DfNoJjA6LrI5DB+273xHFw+8ndEA/GXaaC+0rMXt+ISFiTktdbfY9p4xm6polIsRUllXY7LkCc3kzPav9DpRPhY1kyeHAwu/ThRbfTHzdvoQMBS1OePyN6SMlNO98VRPbI3+CMVdf/eUxsyBY1JKS3WX2pXUfNAtsnLyXmZ38Bw5JKWkOsohk3hN7M7/+v9zvo3XovnxYfkL3oJxQtdlHOzzPN8HcXllsx78dB/nbXO4fX2+2Bzrijv4wo2FnBMhug3Q7/6fnlFOXp8PnUsHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADw1/0DJWc2sWyHi6kAAAAASUVORK5CYII=" /><LName>{props.sub1}</LName></LecDiv>
                <LecDiv><LImg src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEX6xVL////6wkX6w0r++vH97Mr6xE36w0v6wkb6wUL6wT/847P+9eT///36xlP+8dr97tH7znH83J796ML70Hj6ymX+9+n72JP71Yj+8dn6ymL83qT84Kv/+/T836n71o370Hf85bn704L6zWxs+jlpAAAE7klEQVR4nO3b63KqOgAFYEgkJNxFEcS7vv87HrDb0xJCEnr2kTizvpn+au1kNfdLPQ8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABUGCciiiLSfQnBKVu6PDaYRPOjVHjNsUhOfi9d5cGxyQgJ31bU3yGFP5DSiR9kJDsn/sgquGRuhySBVGJ1QibWxTjeH/sL5W8u9gx2CXk7na93ijNnM1oljEptvl7qbEabhCJQp5IylpGTQ6tFQp7bBOwklYvVaE4o9pYBO6VYIoOeMaHY2Af0/WJqslmOKWHYzAnox5+XkJ7mBEw+r5Xy46wqbB0cTQ0JRTonYPl5Y2lYj2PsNoeyLs/BeJGaR0ul0NEnHM8UmyriNAwpJYLdN4NOmmZLhdDSJyRSvvQufvS0brN4+VGTtXvjaE+bkG2lhBe5o4Vi/armwsFxtKdNGEor7kTR0ZjYPuvx9LYiz6RNyOPhN2PlWMlE/4e4u7oN1ieUVmzlRE+jWb5xtI0aEsrfPE6OJQ4fZOjrUPpm4eSEZzCrlfqVg6syk1kjjb/K3JzzdPSzxWjRltbRp2WcN+N3drUgH9VW563avgQNI59xoN8zrLynDqH2h4o7PEP8ZNg9aQ5KV0HdCu5+VRp2wHQ6YW8XX4nrIf/zKcbqto6cbq6mkyi+MkXsthxOTyGmhOxhTthtnQ7uDjvGE2Fud2B6uri6uTCf6ltG9IvMzSHH5mbmYdEX+2p8ONkbbW7XGL/ZVePWxYh2d8Ck0t8BvzwcbKjW9/itzR3U6XMTPg9Ha/NNYuDeiGqd0OsPR7O6MFxkuNdO5yTshIRu40STsiBvKri1mQm9vrmKrNnspiI6d3kxP2Gv65SV6oVUp3Zt+fa7hB1GRRsrmuvGtTvEXyf0nu31PEqYuNYR5Zd7q3lVwDO5Q55cW9cIqTftZjYyxuRFq2vThbzD3SmmbO05BZXPVP+3ohoxT1XQTCpfPk5Ik7tupdK6kpBVqWLpz+TN33gojLqeetZdyUgvbpZqpSzrCrIdFV/Ie4bRJah43l3k028rs+GUkS6W8DnmNVJzY3IT8xupgPzVzUqhLjpbD3/BzMH4r3m9oDwOyxmN1iXt8HPhd/mTqzKj/LJP0ZHf4bsxJo/vcrLx01ipBtigCe63Yvw28yL9htsidRj9/DsH6683PzzajleW0kBDpPk8KTPx405Gtai5L9EPhXRwvQoO9aW8qbYHw/JFirOL/Hz1IkE6IqrOozOqdIF8HlE8TpswbKSRfAX8csr3RbFXbhODBZal/G4d0D8M7rjt/zLfru9vpKp73CmDuczuPF+yX2Ak5eqNqtLwRVA41Ug1ljimYa31O2b5DfNoJjA6LrI5DB+273xHFw+8ndEA/GXaaC+0rMXt+ISFiTktdbfY9p4xm6polIsRUllXY7LkCc3kzPav9DpRPhY1kyeHAwu/ThRbfTHzdvoQMBS1OePyN6SMlNO98VRPbI3+CMVdf/eUxsyBY1JKS3WX2pXUfNAtsnLyXmZ38Bw5JKWkOsohk3hN7M7/+v9zvo3XovnxYfkL3oJxQtdlHOzzPN8HcXllsx78dB/nbXO4fX2+2Bzrijv4wo2FnBMhug3Q7/6fnlFOXp8PnUsHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADw1/0DJWc2sWyHi6kAAAAASUVORK5CYII=" /><LName>{props.sub2}</LName></LecDiv>
                <LecDiv><LImg src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEX6xVL////6wkX6w0r++vH97Mr6xE36w0v6wkb6wUL6wT/847P+9eT///36xlP+8dr97tH7znH83J796ML70Hj6ymX+9+n72JP71Yj+8dn6ymL83qT84Kv/+/T836n71o370Hf85bn704L6zWxs+jlpAAAE7klEQVR4nO3b63KqOgAFYEgkJNxFEcS7vv87HrDb0xJCEnr2kTizvpn+au1kNfdLPQ8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABUGCciiiLSfQnBKVu6PDaYRPOjVHjNsUhOfi9d5cGxyQgJ31bU3yGFP5DSiR9kJDsn/sgquGRuhySBVGJ1QibWxTjeH/sL5W8u9gx2CXk7na93ijNnM1oljEptvl7qbEabhCJQp5IylpGTQ6tFQp7bBOwklYvVaE4o9pYBO6VYIoOeMaHY2Af0/WJqslmOKWHYzAnox5+XkJ7mBEw+r5Xy46wqbB0cTQ0JRTonYPl5Y2lYj2PsNoeyLs/BeJGaR0ul0NEnHM8UmyriNAwpJYLdN4NOmmZLhdDSJyRSvvQufvS0brN4+VGTtXvjaE+bkG2lhBe5o4Vi/armwsFxtKdNGEor7kTR0ZjYPuvx9LYiz6RNyOPhN2PlWMlE/4e4u7oN1ieUVmzlRE+jWb5xtI0aEsrfPE6OJQ4fZOjrUPpm4eSEZzCrlfqVg6syk1kjjb/K3JzzdPSzxWjRltbRp2WcN+N3drUgH9VW563avgQNI59xoN8zrLynDqH2h4o7PEP8ZNg9aQ5KV0HdCu5+VRp2wHQ6YW8XX4nrIf/zKcbqto6cbq6mkyi+MkXsthxOTyGmhOxhTthtnQ7uDjvGE2Fud2B6uri6uTCf6ltG9IvMzSHH5mbmYdEX+2p8ONkbbW7XGL/ZVePWxYh2d8Ck0t8BvzwcbKjW9/itzR3U6XMTPg9Ha/NNYuDeiGqd0OsPR7O6MFxkuNdO5yTshIRu40STsiBvKri1mQm9vrmKrNnspiI6d3kxP2Gv65SV6oVUp3Zt+fa7hB1GRRsrmuvGtTvEXyf0nu31PEqYuNYR5Zd7q3lVwDO5Q55cW9cIqTftZjYyxuRFq2vThbzD3SmmbO05BZXPVP+3ohoxT1XQTCpfPk5Ik7tupdK6kpBVqWLpz+TN33gojLqeetZdyUgvbpZqpSzrCrIdFV/Ie4bRJah43l3k028rs+GUkS6W8DnmNVJzY3IT8xupgPzVzUqhLjpbD3/BzMH4r3m9oDwOyxmN1iXt8HPhd/mTqzKj/LJP0ZHf4bsxJo/vcrLx01ipBtigCe63Yvw28yL9htsidRj9/DsH6683PzzajleW0kBDpPk8KTPx405Gtai5L9EPhXRwvQoO9aW8qbYHw/JFirOL/Hz1IkE6IqrOozOqdIF8HlE8TpswbKSRfAX8csr3RbFXbhODBZal/G4d0D8M7rjt/zLfru9vpKp73CmDuczuPF+yX2Ak5eqNqtLwRVA41Ug1ljimYa31O2b5DfNoJjA6LrI5DB+273xHFw+8ndEA/GXaaC+0rMXt+ISFiTktdbfY9p4xm6polIsRUllXY7LkCc3kzPav9DpRPhY1kyeHAwu/ThRbfTHzdvoQMBS1OePyN6SMlNO98VRPbI3+CMVdf/eUxsyBY1JKS3WX2pXUfNAtsnLyXmZ38Bw5JKWkOsohk3hN7M7/+v9zvo3XovnxYfkL3oJxQtdlHOzzPN8HcXllsx78dB/nbXO4fX2+2Bzrijv4wo2FnBMhug3Q7/6fnlFOXp8PnUsHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADw1/0DJWc2sWyHi6kAAAAASUVORK5CYII=" /><LName>{props.sub3}</LName></LecDiv>
            </LecFieldContents>
        </LecFieldMain>
    )
}

export default MainLecField