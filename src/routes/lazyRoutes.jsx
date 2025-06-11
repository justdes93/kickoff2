import { lazy } from 'react';

export const Home = lazy(() => import('..//Pages//Home'));
export const Login = lazy(() => import('..//Pages//Auth/Login'));
export const Register = lazy(() => import('..//Pages//Auth/Register'));

export const Profile = lazy(() => import('..//Pages//Profile/Profile'));
export const TeamSelect = lazy(() => import('..//Pages//Profile/TeamSelect'));
export const Settings = lazy(() => import('..//Pages//Profile/Settings'));

export const ClubOverview = lazy(() => import('..//Pages//Club/Overview'));
export const ClubFinance = lazy(() => import('..//Pages//Club/Finance'));
export const ClubHistory = lazy(() => import('..//Pages//Club/History'));
export const ClubFacilities = lazy(() => import('..//Pages//Club/Facilities'));

export const Squad = lazy(() => import('..//Pages//Players/Squad'));
export const Training = lazy(() => import('..//Pages//Players/Training'));
export const PlayerProfile = lazy(() => import('..//Pages//Players/PlayerProfile'));

export const MatchCalendar = lazy(() => import('..//Pages//Matches/Calendar'));
export const MatchView = lazy(() => import('..//Pages//Matches/MatchView'));

export const TacticsFormation = lazy(() => import('..//Pages//Tactics/Formation'));
export const TacticsInstructions = lazy(() => import('..//Pages//Tactics/Instructions'));

export const TransferMarket = lazy(() => import('..//Pages//Transfers/Market'));
export const TransferOffers = lazy(() => import('..//Pages//Transfers/Offers'));

export const ScoutingRegions = lazy(() => import('..//Pages//Scouting/Regions'));
export const ScoutingReports = lazy(() => import('..//Pages//Scouting/Reports'));

export const TeamStats = lazy(() => import('..//Pages//Stats/TeamStats'));
export const PlayerStats = lazy(() => import('..//Pages//Stats/PlayerStats'));
export const ClubRecords = lazy(() => import('..//Pages//Stats/Records'));

export const League = lazy(() => import('..//Pages//Tournaments/League'));
export const Cup = lazy(() => import('..//Pages//Tournaments/Cup'));
export const TopScorers = lazy(() => import('..//Pages//Tournaments/TopScorers'));

export const ForumTopics = lazy(() => import('..//Pages//Forum/Topics'));
export const ForumThread = lazy(() => import('..//Pages//Forum/Thread'));

export const AdminClubs = lazy(() => import('..//Pages//Admin/Clubs'));
export const AdminPlayers = lazy(() => import('..//Pages//Admin/Players'));
export const AdminUsers = lazy(() => import('..//Pages//Admin/Users'));
export const AdminTournaments = lazy(() => import('..//Pages//Admin/Tournaments'));

export const NotFound = lazy(() => import('..//Pages//NotFound'));
