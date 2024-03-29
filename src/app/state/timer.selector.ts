import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TimerState } from './timer.state';

export const TIMER_STATE = 'timer';

export const getTimerState = createFeatureSelector<TimerState>(TIMER_STATE);

export const getImageNumber = createSelector(getTimerState,(state)=> state.imageNumber); //state'teki ımageurl'i dönüyor bize

export const getTimer = createSelector(getTimerState,(state)=>state.timer);
