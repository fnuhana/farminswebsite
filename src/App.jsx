import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '@mantine/core/styles.css';
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

import { MantineProvider } from '@mantine/core';


function App() {
  const [count, setCount] = useState(0)

  return <MantineProvider>
    <>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Group justify="space-between" mt="md" mb="md">
        <Text fw={900} c={'pink'}>hi my name is farmin nuhana!</Text>
      </Group>

      <Text size="sm" c="dimmed">
      in my free time, i enjoy drawing/graphic design, traveling to new places, and drinking boba! 🧋
      </Text>
    </Card>
    </>
    
  </MantineProvider>
}

export default App
