import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import PersonIcon from '@material-ui/icons/PersonOutlineRounded'
import ChatBubbleIcon from '@material-ui/icons/ChatBubbleOutlineRounded'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const Container = styled.div`
  background-color: #fff;
  position: fixed;
  width: 100%;
  height: 90px;
  top: 0px;
  border-bottom: solid 1px rgba(0, 0, 0, 0.54);
`
const useStyles = makeStyles({
  root: {
    paddingTop: '20px',
    width: 500,
    margin: '0px auto 0px auto;'
  }
})

const Header = () => {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const history = useHistory()

  return (
    <Container>
      <BottomNavigation
        value={value}
        onChange={(_, newValue) => {
          if (value === 0) {
            history.push('/login')
          } else {
            history.push('/')
          }
          setValue(newValue)
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Feed" icon={<ChatBubbleIcon />} />
        <BottomNavigationAction label="Login" icon={<PersonIcon />} />
      </BottomNavigation>
    </Container>
  )
}

export default Header
