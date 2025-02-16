import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FollowersList from '../FollowersList';

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

describe('FollowersList', () => {
  beforeEach(() => {
    console.log('RUNNING BEFORE EACH TEST');
  });

  beforeAll(() => {
    console.log('RUNNING ONCE BEFORE ALL TESTS');
  });

  afterEach(() => {
    console.log('RUNNING AFTER EACH TEST');
  });

  afterAll(() => {
    console.log('RUNNING AFTER ALL TESTS');
  });

  it('should render follower item', async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findByTestId('follower-item-0');
    // screen.debug();
    expect(followerDivElement).toBeInTheDocument();
  });
  it('should render follower item', async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findByTestId('follower-item-0');
    // screen.debug();
    expect(followerDivElement).toBeInTheDocument();
  });
  it('should render follower item', async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findByTestId('follower-item-0');
    // screen.debug();
    expect(followerDivElement).toBeInTheDocument();
  });

  // it('should render multiple followers items', async () => {
  //     render(<MockFollowersList />);
  //     const followerDivElements = await screen.findAllByTestId(/follower-item/i);
  //     expect(followerDivElements.length).toBe(5);
  //   });
});
