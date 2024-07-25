import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: #1E1E1E; /* Adjust as needed */
`;

export const LeftPanel = styled.div`
  width: 300px; /* Adjust width as needed */
  background-color: #292B2D;
  color: white;
  padding: 15px;
  overflow-y: auto;
`;

export const MiddlePanel = styled.div<{ isRightPanelVisible: boolean }>`
  flex-grow: ${({ isRightPanelVisible }) => (isRightPanelVisible ? 8 : 1)};
  flex-shrink: 0;
  min-width: 0; /* Ensures the middle panel can shrink properly */
  background-color: #1E1E1E;
  color: white;
  padding: 15px;
  overflow-y: auto;
`;

export const RightPanel = styled.div<{ isRightPanelVisible: boolean }>`
  flex-grow: 4;
  flex-shrink: 0;
  flex-basis: ${({ isRightPanelVisible }) => (isRightPanelVisible ? '20%' : '0')};
  background-color: #2E2E2E;
  color: white;
  padding: 15px;
  overflow-y: auto;
  display: ${({ isRightPanelVisible }) => (isRightPanelVisible ? 'block' : 'none')};
`;
