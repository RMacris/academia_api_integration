import React from 'react'
import { UserTemplate } from '../scripts/UserTemplate'

const user = new UserTemplate()

export const LoginContext = React.createContext(user)