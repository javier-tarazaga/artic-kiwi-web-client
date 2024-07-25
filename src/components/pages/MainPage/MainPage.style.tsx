import styled from 'styled-components';

export const MainScreenContainer = styled.div`
  display: flex;
  height: 100vh;
`;

export const SideMenu = styled.aside`
  width: 300px; /* Fixed width for the sidebar */
  background-color: #f0f0f0; /* Light background color */
  border-right: 1px solid #ddd; /* Optional: Add a border to separate the sidebar */
`;

export const TaskListContainer = styled.main`
  flex-grow: 1; /* Take up the remaining space */
  padding: 20px; /* Optional: Add some padding for content */
`;