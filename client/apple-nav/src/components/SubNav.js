import React from 'react';
import styled from 'styled-components';
import data from '../apple-data';
import { StyledWrapper } from './reusable-styles/Reusables.js';
import NavItem from './NavItem';

export default class SubNav extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            dataIn: [],
            name: '',
            match: props.match
        }
    }

    componentDidMount() {
        const name = this.state.match.params.name;
        this.getData(name);
    }

    getData = name => {
        let thisNav = data.reduce((acc, item) => 
        {   if(item.name === name){
                acc = item.subsections;
                } 
            return acc;
        }, []);
        this.setState(() => ({dataIn: thisNav, name: name}) );
    }

    componentWillReceiveProps(newProps){
        if(this.state.name !== newProps.match.params.name){
            this.getData(newProps.match.params.name);
        }
    }

    render(){
        return (
            <div>
                <StyledWrapper>
                    {this.state.dataIn.map(item => {
                        return <NavItem item={item} key={Math.random() + Date.now()} />
                        })};
                </StyledWrapper>
            </div>
        );
    }

}


