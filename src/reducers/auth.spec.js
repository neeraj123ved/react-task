/* global expect, it, describe */

import auth from './auth'
import { UPDATE_FIELD_AUTH, LOGIN, SIGNUP, ASYNC_START } from '../actionTypes'

describe('auth', () => {
  it('should return the initial state when no action passed', () => {
    expect(auth(undefined, {})).toEqual({
      activeStep: 0,
      id: '',
      response: '',
      text: 'show',
      titleHeading: 'Create an account',
      typePassword: 'password',
      uploadBox: false,
      uploadImage: true,
      dashboard: false,
      userAccount: 'account',
      vatRegistered: false
    })
  })

  describe('UPDATE_FIELD_AUTH', () => {
    it('should add the key and value to the state', () => {
      expect(
        auth(
          {},
          {
            key: 'email',
            value: 'test@example.com',
            type: UPDATE_FIELD_AUTH
          }
        )
      ).toEqual({ email: 'test@example.com' })
    })
  })

  describe('LOGIN', () => {
    it('should set token', () => {
      expect(auth({}, { type: LOGIN, payload: { token: 'a-token' } })).toEqual({
        token: 'a-token'
      })
    })
  })

  describe('SIGNUP', () => {
    it('should set token', () => {
      expect(auth({}, { type: SIGNUP, payload: { token: 'a-token' } })).toEqual(
        { token: 'a-token', undefined: undefined }
      )
    })
  })

  describe('ASYNC_START', () => {
    describe('No sub action', () => {
      it('should return initial state', () => {
        expect(auth({}, { type: ASYNC_START })).toEqual({})
      })
    })

    describe('Sub action is LOGIN', () => {
      it('should set inProgress to true', () => {
        expect(auth({}, { type: ASYNC_START, subtype: LOGIN })).toEqual({
          inProgress: true
        })
      })
    })

    describe('Sub action is SIGNUP', () => {
      it('should set inProgress to true', () => {
        expect(auth({}, { type: ASYNC_START, subtype: LOGIN })).toEqual({
          inProgress: true
        })
      })
    })
  })
})
