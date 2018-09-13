import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ReactLogo from '../react-logo.png'
import { connect } from 'react-redux'

class Home extends Component {
    render() {
        console.log(this.props);
        const { posts } = this.props;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <Link to={'/' + post.id}><div className="post card" key={post.id}>
                        <img src={ReactLogo} alt=""/>
                            <div className="card-content">
                                <span className="card-title">{post.title}</span>
                                <p className="black-text">{post.body.slice(0, 200)}</p>
                            </div>
                    </div></Link>
                )
            })
        ) : (
            <div className="center">No posts yet.</div>
        );
        return(
            <div className="container home">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home)