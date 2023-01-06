import React from 'react'

import { Grid } from './styles'

import MainHeader from '../MainHeader';
import Aside from '../Aside';
import Content from '../Content';

interface ContentProps {
    children?: React.ReactNode;
}

const Layout: React.FC<ContentProps> = ({ children }) => (
        <Grid>
            <MainHeader />
            <Aside />
            <Content>
                { children }
            </Content>
        </Grid>
    );

export default Layout;