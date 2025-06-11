import { Navigate } from 'react-router-dom';
import Layout from '../Pages/MainLayout';
import GuestLayout from '../Pages/GuestLayout';
import AdminLayout from '../Pages/AdminLayout';
import * as Pages from './lazyRoutes';
import RequireAuth from './RequireAuth';
import RequireAdmin from './RequireAdmin';

const routes = [
  {
    path: '/',
    element: <GuestLayout />,
    children: [
      { index: true, element: <Pages.Home /> },
      { path: 'login', element: <Pages.Login /> },
      { path: 'register', element: <Pages.Register /> },
    ],
  },
  {
    path: '/',
    element: (
      <RequireAuth>
        <Layout />
      </RequireAuth>
    ),
    children: [
      {
        path: 'profile',
        children: [
          { index: true, element: <Pages.Profile /> },
          { path: 'team/select', element: <Pages.TeamSelect /> },
          { path: 'settings', element: <Pages.Settings /> },
        ],
      },
      {
        path: 'club',
        children: [
          { index: true, element: <Pages.ClubOverview /> },
          { path: 'finance', element: <Pages.ClubFinance /> },
          { path: 'history', element: <Pages.ClubHistory /> },
          { path: 'facilities', element: <Pages.ClubFacilities /> },
        ],
      },
      {
        path: 'players',
        children: [
          { index: true, element: <Pages.Squad /> },
          { path: 'training', element: <Pages.Training /> },
          { path: ':id', element: <Pages.PlayerProfile /> },
        ],
      },
      {
        path: 'matches',
        children: [
          { index: true, element: <Pages.MatchCalendar /> },
          { path: ':matchId', element: <Pages.MatchView /> },
        ],
      },
      {
        path: 'tactics',
        children: [
          { index: true, element: <Pages.TacticsFormation /> },
          { path: 'instructions', element: <Pages.TacticsInstructions /> },
        ],
      },
      {
        path: 'transfers',
        children: [
          { index: true, element: <Pages.TransferMarket /> },
          { path: 'offers', element: <Pages.TransferOffers /> },
        ],
      },
      {
        path: 'scouting',
        children: [
          { index: true, element: <Pages.ScoutingRegions /> },
          { path: 'reports', element: <Pages.ScoutingReports /> },
        ],
      },
      {
        path: 'stats',
        children: [
          { index: true, element: <Pages.TeamStats /> },
          { path: 'players', element: <Pages.PlayerStats /> },
          { path: 'records', element: <Pages.ClubRecords /> },
        ],
      },
      {
        path: 'tournaments',
        children: [
          { index: true, element: <Pages.League /> },
          { path: 'cup', element: <Pages.Cup /> },
          { path: 'top', element: <Pages.TopScorers /> },
        ],
      },
      {
        path: 'forum',
        children: [
          { index: true, element: <Pages.ForumTopics /> },
          { path: 'topic/:id', element: <Pages.ForumThread /> },
        ],
      },
    ],
  },
  {
    path: '/admin',
    element: (
      <RequireAdmin>
        <AdminLayout />
      </RequireAdmin>
    ),
    children: [
      { index: true, element: <Navigate to="clubs" replace /> },
      { path: 'clubs', element: <Pages.AdminClubs /> },
      { path: 'players', element: <Pages.AdminPlayers /> },
      { path: 'users', element: <Pages.AdminUsers /> },
      { path: 'tournaments', element: <Pages.AdminTournaments /> },
    ],
  },
  {
    path: '*',
    element: <Pages.NotFound />,
  },
];

export default routes;
