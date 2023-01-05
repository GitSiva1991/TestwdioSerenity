import { Ensure, includes } from '@serenity-js/assertions';
import { actorCalled } from '@serenity-js/core';
import { By, Click, Navigate, Page, PageElement } from '@serenity-js/web';
import { describe, it } from 'mocha';

describe('serenity-js.org website', () => {

    it(`tells people what they're reading`, () =>
        actorCalled('Alice').attemptsTo(
            Navigate.to('https://google.com'),
            
            Ensure.that(Page.current().title(), includes('Google')),
        ));
});
