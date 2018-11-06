/* global expect, it, describe */

import common from './common'
import { defaultState } from './common'
import {
  APP_LOAD,
  REDIRECT,
  LOGOUT,
  LOGIN,
  REGISTER,
  REGISTER_PAGE_UNLOADED
} from '../actionTypes'

describe('common', () => {
  it('should return the initial state when no action passed', () => {
    expect(common(undefined, {})).toEqual(defaultState)
  })

  describe('APP_LOAD', () => {
    it('should set the token', () => {
      expect(
        common(
          {},
          {
            type: APP_LOAD,
            token: 'a-token'
          }
        )
      ).toEqual({
        token: 'a-token',
        appLoaded: true,
        currentUser: null
      })
    })

    it('should set the currentUser if present in payload', () => {
      expect(
        common(
          {},
          {
            type: APP_LOAD,
            payload: { user: { email: 'test@example.com' } }
          }
        )
      ).toMatchObject({
        currentUser: { email: 'test@example.com' }
      })
    })
  })

  describe('REDIRECT', () => {
    it('should set inProgress to false', () => {
      expect(
        common(
          {},
          {
            type: REDIRECT
          }
        )
      ).toEqual({
        redirectTo: null
      })
    })
  })

  describe('LOGOUT', () => {
    it('should remove token and currentUser to null and redirectTo root', () => {
      expect(
        common(
          {},
          {
            type: LOGOUT
          }
        )
      ).toEqual({
        token: null,
        redirectTo: '/',
        currentUser: null
      })
    })
  })

  describe('LOGIN', () => {
    describe('without errors', () => {
      const user = { token: 'a-token' }
      it('should redirect to root and set user object', () => {
        expect(
          common(
            {},
            {
              type: LOGIN,
              payload: user
            }
          )
        ).toEqual({
          token: 'a-token',
          currentUser: user
        })
      })
    })

    describe('with errors', () => {
      it('should set token, currentUser, and redirect to null', () => {
        expect(
          common(
            {},
            {
              type: LOGIN,
              error: true
            }
          )
        ).toEqual({
          token: null,
          currentUser: null
        })
      })
    })
  })

  describe('REGISTER', () => {
    describe('without errors', () => {
      it('should redirect to root and set user object', () => {
        const user = { token: 'a-token' }
        expect(
          common(
            {},
            {
              type: REGISTER,
              payload: user
            }
          )
        ).toEqual({
          token: 'a-token',
          currentUser: user
        })
      })
    })

    describe('with errors', () => {
      it('should set token, currentUser, and redirect to null', () => {
        expect(
          common(
            {},
            {
              type: REGISTER,
              error: true
            }
          )
        ).toEqual({
          token: null,
          currentUser: null
        })
      })
    })
  })
})
