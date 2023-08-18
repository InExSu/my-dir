import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { useMachine } from '@xstate/react';
import { ToDoMachine } from '@/machines/todoAppMachine';

const inter = Inter( { subsets: [ 'latin' ] } );

export default function Home ()
{
  const [ state, send ] = useMachine(ToDoMachine);
  return (
    <div>
      { JSON.stringify( state.value ) }
      <button onClick={ () =>
      {
        send( "Todos loaded" );
      } }>Todos loaded</button>
      <button onClick={ () =>
      {
        send( "Loading todos fail" );
      } }>Loading todos fail</button>
      </div> );
};
