import { lazy } from 'react';

export const Home = lazy(() => import('../pages/Home'));
export const Login = lazy(() => import('../pages/Auth/Login'));
export const Register = lazy(() => import('../pages/Auth/Register'));

export const Profile = lazy(() => import('../pages/Profile/Profile'));
export const TeamSelect = lazy(() => import('../pages/Profile/TeamSelect'));
export const Settings = lazy(() => import('../pages/Profile/Settings'));

export const ClubOverview = lazy(() => import('../pages/Club/Overview'));
export const ClubFinance = lazy(() => import('../pages/Club/Finance'));
export const ClubHistory = lazy(() => import('../pages/Club/History'));
export const ClubFacilities = lazy(() => import('../pages/Club/Facilities'));

export const Squad = lazy(() => import('../pages/Players/Squad'));
export const Training = lazy(() => import('../pages/Players/Training'));
export const PlayerProfile = lazy(() => import('../pages/Players/PlayerProfile'));

export const MatchCalendar = lazy(() => import('../pages/Matches/Calendar'));
export const MatchView = lazy(() => import('../pages/Matches/MatchView'));

export const TacticsFormation = lazy(() => import('../pages/Tactics/Formation'));
export const TacticsInstructions = lazy(() => import('../pages/Tactics/Instructions'));

export const TransferMarket = lazy(() => import('../pages/Transfers/Market'));
export const TransferOffers = lazy(() => import('../pages/Transfers/Offers'));

export const ScoutingRegions = lazy(() => import('../pages/Scouting/Regions'));
export const ScoutingReports = lazy(() => import('../pages/Scouting/Reports'));

export const TeamStats = lazy(() => import('../pages/Stats/TeamStats'));
export const PlayerStats = lazy(() => import('../pages/Stats/PlayerStats'));
export const ClubRecords = lazy(() => import('../pages/Stats/Records'));

export const League = lazy(() => import('../pages/Tournaments/League'));
export const Cup = lazy(() => import('../pages/Tournaments/Cup'));
export const TopScorers = lazy(() => import('../pages/Tournaments/TopScorers'));

export const ForumTopics = lazy(() => import('../pages/Forum/Topics'));
export const ForumThread = lazy(() => import('../pages/Forum/Thread'));

export const AdminClubs = lazy(() => import('../pages/Admin/Clubs'));
export const AdminPlayers = lazy(() => import('../pages/Admin/Players'));
export const AdminUsers = lazy(() => import('../pages/Admin/Users'));
export const AdminTournaments = lazy(() => import('../pages/Admin/Tournaments'));

export const NotFound = lazy(() => import('../pages/NotFound'));
