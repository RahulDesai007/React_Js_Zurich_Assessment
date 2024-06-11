import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import PieChart from '../kpi_charts/PieChart';
import BarChart from '../kpi_charts/BarChart';
import LineChart from '../kpi_charts/LineChart';
import DonutChart from '../kpi_charts/DonutChart';
import HorizontalBarChart from '../kpi_charts/HorizontalBarChart';
import { Helmet } from "react-helmet";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  height: theme.spacing(28),
  overflow: 'hidden',
  color: theme.palette.text.secondary,
}));

export default function Dashboard() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dashboard</title>
      </Helmet>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={4}>
          <Item> <PieChart /> </Item>

        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Item><DonutChart /></Item>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Item><LineChart /></Item>
        </Grid>
        <Grid item xs={12} md={8} lg={8}>
          <Item><BarChart /></Item>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <Item><HorizontalBarChart /></Item>
        </Grid>
      </Grid>
    </>
  );
}